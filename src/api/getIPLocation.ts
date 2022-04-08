export interface Metadata {
    ip_address: string;
    city: string;
    city_geoname_id: number;
    region: string;
    region_iso_code: string;
    region_geoname_id: number;
    postal_code: number;
    country: string;
    country_code: string;
    country_geoname_id: number;
    country_is_eu: boolean;
    continent: string;
    continent_code: string;
    continent_geoname_id: number;
    longitude: number;
    latitude: number;
    security: {
        is_vpn: boolean;
    };
    timezone: {
        name: string;
        abbreviation: string;
        gmt_offset: number;
        current_time: string;
        is_dst: boolean;
    };
    flag: {
        emoji: string;
        unicode: string;
        png: string;
        svg: string;
    };
    currency: {
        currency_name: string;
        currency_code: string;
    };
    connection: {
        autonomous_system_number: number;
        autonomous_system_organization: string;
        connection_type: string;
        isp_name: string;
        organization_name: string;
    };
}

export interface IPError {
    error: {
        code: string;
        details?: string;
        message: string;
    };
}

export const getIP = async (): Promise<{ ip: string }> => {
    return await (await fetch('https://api.ipify.org?format=json')).json();
};

/**
 * It returns the location of the user's IP address.
 * @returns The response is a JSON object with the following keys:
 */
export const getIPLocation = async (
    ip?: string
): Promise<Metadata | IPError> => {
    // TODO: make this private; generate a new key
    const API_KEY = 'bfd582cd1fc6423491aaded0d9e36a02';
    const ENDPOINT = `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}${
        ip ? `&ip_address=${ip}` : ''
    }`;
    const res = await fetch(ENDPOINT);
    const obj = await res.json();
    if (res.ok) return obj as Metadata;
    else return obj as IPError;
};

export default getIPLocation;
