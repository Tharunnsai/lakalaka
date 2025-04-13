import { AirtableResponse, Service } from "@/types/services";

export async function getServices(): Promise<Service[]> {
  try {
    const baseId = process.env.BASE_ID;
    const patToken = process.env.PAT_TOKEN;

    if (!baseId || !patToken) {
      console.error("Missing environment variables: BASE_ID or PAT_TOKEN");
      return [];
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/Services?filterByFormula=Active%3D1`,
      {
        headers: {
          Authorization: `Bearer ${patToken}`,
          "Content-Type": "application/json",
        },
        // Adding next cache options for better performance
        next: {
          tags: ["services"],
          revalidate: 60 * 60, // Revalidate every hour
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }

    const data: AirtableResponse = await response.json();

    return data.records.map((record) => {
      // Find the Gumroad Link field regardless of whitespace
      const gumroadLinkKey = Object.keys(record.fields).find(key => 
        key.trim() === "Gumroad Link" || key === "Gumroad Link");
      
      const redirectLinkKey = Object.keys(record.fields).find(key => 
        key.trim() === "Redirect Link" || key === "Redirect Link");
      
      // Safely access the fields with the found keys
      const gumroadLink = gumroadLinkKey 
        ? String(record.fields[gumroadLinkKey as keyof typeof record.fields] || "") 
        : "";
      
      const redirectLink = redirectLinkKey 
        ? String(record.fields[redirectLinkKey as keyof typeof record.fields] || "") 
        : undefined;
      
      return {
        id: record.id,
        name: record.fields.Name,
        slug: record.fields.Slug,
        tagline: record.fields.tagline,
        description: record.fields.Description,
        packages_include: record.fields.packages_include,
        price: record.fields.Price,
        type: record.fields.Type,
        gumroadLink,
        redirectLink,
        thumbnail: record.fields.Thumbnail,
        active: record.fields.Active,
        number_of_purchases: record.fields.number_of_purchases,
      };
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const baseId = process.env.BASE_ID;
    const patToken = process.env.PAT_TOKEN;

    if (!baseId || !patToken) {
      console.error("Missing environment variables: BASE_ID or PAT_TOKEN");
      return null;
    }

    // Fetch a single service by slug
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/Services?filterByFormula={Slug}='${encodeURIComponent(slug)}'`,
      {
        headers: {
          Authorization: `Bearer ${patToken}`,
          "Content-Type": "application/json",
        },
        next: {
          tags: [`service-${slug}`],
          revalidate: 60 * 60, // Revalidate every hour
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch service: ${response.statusText}`);
    }

    const data: AirtableResponse = await response.json();

    if (data.records.length === 0) {
      return null;
    }

    const record = data.records[0];
    // console.log("record", record.fields);
    
    // Find the Gumroad Link field regardless of whitespace
    const gumroadLinkKey = Object.keys(record.fields).find(key => 
      key.trim() === "Gumroad Link" || key === "Gumroad Link");
    
    const redirectLinkKey = Object.keys(record.fields).find(key => 
      key.trim() === "Redirect Link" || key === "Redirect Link");
    
    // Safely access the fields with the found keys
    const gumroadLink = gumroadLinkKey 
      ? String(record.fields[gumroadLinkKey as keyof typeof record.fields] || "") 
      : "";
    
    const redirectLink = redirectLinkKey 
      ? String(record.fields[redirectLinkKey as keyof typeof record.fields] || "") 
      : undefined;
    
    return {
      id: record.id,
      name: record.fields.Name,
      slug: record.fields.Slug,
      tagline: record.fields.tagline,
      description: record.fields.Description,
      packages_include: record.fields.packages_include,
      price: record.fields.Price,
      type: record.fields.Type,
      gumroadLink,
      redirectLink,
      thumbnail: record.fields.Thumbnail,
      active: record.fields.Active,
      number_of_purchases: record.fields.number_of_purchases,
    };
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    return null;
  }
} 