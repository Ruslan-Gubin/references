import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/Breadcrumbs";
import { ReferencedInfoCard  } from "@/widgets/user/reference-info-main/ReferencedInfoCard";
import { mockData } from "@/shared/data/mockData";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params: { id } }: Props) {
  const currentReference = mockData.find((reference) => reference.id === id);

  return {
    title:
      currentReference && currentReference?.theme
        ? currentReference.theme
        : "Reference info",
    description:
      currentReference && currentReference?.description
        ? currentReference.description
        : "Reference info page",
  };
}

export default async function UserInfo({ params: { id } }: Props) {
  const currentReference = mockData.find((reference) => reference.id === id);

  if (!currentReference) return notFound();

  const breadcrumb = [
    { value: "Обращения", href: "/" },
    { value: "Информация", href: null },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumb} />
      {currentReference && <ReferencedInfoCard reference={currentReference} />}
    </>
  );
}
