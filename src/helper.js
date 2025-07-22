import fs from 'fs';

export const saveToFile = (newData) => {
  const filePath = './data.json';

  let existingData = [];

  // Read existing data if file exists
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath);
    existingData = JSON.parse(fileContent);
  }

  // Add new record
  existingData.push(newData);

  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  console.log('✅ Data written to file');
}