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
              <Button>Baixar em Word</Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ActivityPage;
