import ApplicationForm from "@/components/Careers/ApplicationForm";


export const metadata = {
  title: "Careers | DIVYAM ARCHITECTURE & DESIGN STUDIO",
  description: "Apply for jobs at DIVYAM ARCHITECTURE & DESIGN STUDIO.",
};

export default function CareersPage() {
  return (
    <main className="">


      {/* Client-side form */}
      <ApplicationForm />
    </main>
  );
}
