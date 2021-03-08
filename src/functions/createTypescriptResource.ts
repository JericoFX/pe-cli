import path from "path";
import { createEssentials } from "./tools/essentials";
import { installTemplate } from "./tools/github";

const createTypescriptResource = (
  resourceName: string,
  tsPackages: string[]
) => {
  const resourcePath = path.resolve(resourceName);

  createEssentials(resourcePath, resourceName, tsPackages, true);
  
  // creating template
  installTemplate(resourcePath, tsPackages, true);

};

export default createTypescriptResource;
