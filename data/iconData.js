import toast from "react-hot-toast";

const handleCopyValue = (item) => {
  navigator.clipboard.writeText(item);
  toast(`copied!`, { duration: 1000 });
};

const handleCopyJobNumber = (job) => {
  handleCopyValue(`Job Number - ${job.number} 
Name: ${job.name}
Address: ${job.address}
Email: ${job.email}
Number: ${job.mobile}`);
};

const handleCopyFolderPath = (job) => {
  let nameNoSpace = job.name.replace(/\s+/g, "");
  handleCopyValue(
    `/Users/cbroofing/Library/Mobile Documents/com~apple~CloudDocs/Documents/CBRoofing/Jobs/all/${job.number}-${nameNoSpace}`
  );
};
const handleCopyFolderAdd = (job) => {
  let nameNoSpace = job.name.replace(/\s+/g, "");
  handleCopyValue(`${job.number}-${nameNoSpace}`);
};

export {
  handleCopyValue,
  handleCopyJobNumber,
  handleCopyFolderPath,
  handleCopyFolderAdd,
};
