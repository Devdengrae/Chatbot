const fs = require('fs');

const cleanKeywords = (keywords) => {
  return keywords.map(keyword => {
    let cleanedKeyword = keyword.trim();

    cleanedKeyword = cleanedKeyword.replace(/\n/g, '').replace(/\s\s+/g, ' ');

    return cleanedKeyword;
  }).filter(keyword => keyword); 
};

const cleanScrapedData = (data) => {
  if (!data || !data.keywords || !Array.isArray(data.keywords)) {
    throw new Error('Invalid scraped data format.');
  }

  data.keywords = cleanKeywords(data.keywords);

  return data;
};

const filePath = 'server/data/scraped_data.json';

fs.readFile(filePath, 'utf8', (err, jsonString) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }

  try {
    const data = JSON.parse(jsonString);
    const cleanedData = cleanScrapedData(data);
    fs.writeFileSync(filePath, JSON.stringify(cleanedData, null, 2));
    console.log('Scraped data cleaned and saved successfully.');
  } catch (err) {
    console.log('Error parsing JSON:', err);
  }
});
