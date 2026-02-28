import ApplicationForm from "@/components/Careers/ApplicationForm";


export const metadata = {
  title: "Careers | Plan Edge Architect",
  description: "Apply for jobs at Plan Edge Architect.",
};

export default function CareersPage() {
  return (
    <main className="">
 

      {/* Client-side form */}
      <ApplicationForm />
    </main>
  );
}
