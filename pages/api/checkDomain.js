export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { domain, tld } = req.query;

    if (!domain || !tld) {
        return res.status(400).json({ error: "Domain name and TLD are required." });
    }

    const API_KEY = process.env.RESELLERCLUB_API_KEY;
    const RESELLER_ID = process.env.RESELLERCLUB_ID;

    const url = `https://domaincheck.httpapi.com/api/domains/available.json?auth-userid=${RESELLER_ID}&api-key=${API_KEY}&domain-name=${domain}&tlds=${tld}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
