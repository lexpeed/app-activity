"use client";

import { useLazyGetActivityByIdMockQuery } from "@/api/mock-api";
import { Footer } from "@/components";
import {
  Container,
  Breadcrumbs,
  Tag,
  Button,
} from "@/components/eduque-components";
import { appRoutes } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import {
  LeftOutlined,
  HeartOutlined,
  PrinterOutlined,
  ShareAltOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const iconActions = [
  { icon: <HeartOutlined />, label: "Favoritar" },
  { icon: <PrinterOutlined />, label: "Imprimir" },
  { icon: <ShareAltOutlined />, label: "Compartilhar" },
  { icon: <NotificationOutlined />, label: "Notificar" },
];

const ActivityPage = () => {
  const searchParams = useSearchParams();
  const [getActivity, activityResult] = useLazyGetActivityByIdMockQuery();
  const id = searchParams.get("id");
  const router = useRouter();
  const htmlContent = activityResult.data?.htmlContent || "";

  useEffect(() => {
    if (id) {
      getActivity(id);
    }
  }, [id]);

  const goToHome = () => {
    router.push(appRoutes.home);
  };

  const goToActivities = () => {
    router.push(appRoutes.activities);
  };

  const goBack = () => {
    router.back();
  };

  const onDownloadWord = async () => {
    const response = await fetch("/api/ms-word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: htmlContent,
        filename: "activity.docx",
      }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "activity.docx";
    a.click();
  };

  return (
    <div className="py-2">
      <header>
        <Container>
          <img
            src="/images/eduque-purple-logo.svg"
            alt="Purple Logo"
            className="cursor-pointer"
            onClick={goToHome}
          />
        </Container>
      </header>
      <Container>
        <div className="py-3">
          <Breadcrumbs
            items={[
              { label: "Home", url: "/" },
              {
                label: "Activities",
                url: "/activities",
                onClick: goToActivities,
              },
            ]}
          />
          <div
            className={`
              flex
              items-center
              gap-4 md:gap-6
              mb-4
          `}
          >
            <button
              onClick={goBack}
              className={`
                text-xl sm:text-2xl md:text-3xl
                text-gray-600
              `}
            >
              <LeftOutlined />
            </button>
            <h1
              className={`
            text-3xl sm:text-5xl md:text-6xl
            font-bold
            text-gray-800
            my-6
          `}
            >
              Exercícios de física
            </h1>
          </div>

          <div
            className={`
              flex
              flex-wrap
              gap-2
              mb-4
          `}
          >
            {activityResult.data?.tags.map((tag) => (
              <Tag key={tag.label}>{tag.label}</Tag>
            ))}
          </div>

          <div
            className={`
              flex
              flex-col-reverse lg:flex-row
              gap-4
            `}
          >
            <div
              id="content-div"
              className="bg-gray-100 p-5"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
            <div
              className={`
              flex flex-col
              gap-4
              items-start
              mt-4
              min-w-56
            `}
            >
              <span>{activityResult.data?.summary}</span>
              <Button onClick={onDownloadWord}>Baixar em Word</Button>
              <div
                className={`
                  flex
                  gap-4
                `}
              >
                {iconActions.map((action, index) => (
                  <button
                    key={index}
                    title={action.label}
                    className={`
                      text-gray-700
                      text-lg
                    `}
                  >
                    {action.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ActivityPage;
