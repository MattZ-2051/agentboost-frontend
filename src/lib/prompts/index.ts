export const generateAgentProfilePrompt = ({
  email,
  brandDescription,
  areaOfExpertise,
}: {
  email: string;
  brandDescription?: string;
  areaOfExpertise?: string;
}): string => {
  let prompt = `whose contact info is ${email}`;
  if (brandDescription && brandDescription?.length > 0) {
    prompt += ` with the brand description ${brandDescription}`;
  }
  if (areaOfExpertise && areaOfExpertise?.length > 0) {
    prompt += ` and expertise in the area ${areaOfExpertise}`;
  }

  return prompt;
};
