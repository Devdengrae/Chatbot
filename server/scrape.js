const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const scrape = async (url) => {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
    };

    try {
        const { data } = await axios.get(url, { headers }); // Single axios request with headers
        const $ = cheerio.load(data);
        const title = $('title').text();
        let result = [];
        let keywords = [];

        // Extract links and keywords
        $('a').each((i, link) => {
            const text = $(link).text();
            if (text) {
                result.push({
                    text: text.trim(),
                    href: $(link).attr('href')
                });
                keywords.push(text.toLowerCase().trim());
            }
        });

        // Ensure directory exists
        const dir = path.resolve(__dirname, 'server/data');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Save scraped data to file
        const scrapedData = { title, links: result, keywords };
        fs.writeFileSync(path.join(dir, 'scraped_data.json'), JSON.stringify(scrapedData, null, 2));
        console.log('Data scraped successfully.');
    } catch (err) {
        console.error('Error in scraping:', err.message);
    }
};


scrape('https://segment.com/docs/?ref=nav');
scrape('https://docs.mparticle.com/');
scrape('https://docs.lytics.com/');
scrape('https://docs.zeotap.com/home/en-us/')