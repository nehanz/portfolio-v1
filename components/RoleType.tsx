import TextType from "@/components/ui/TextType";

export default function RoleType() {
  return (
    <TextType
      text={["Full Stack Developer", "Devops Enthusiast", "Problem Solver"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
  );
}
