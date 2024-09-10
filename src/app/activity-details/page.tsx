"use client";

import { useLazyGetActivityByIdQuery } from "@/api/activity/activityApi";
import { Breadcrumbs, Container, Footer } from "@/components";
import { appRoutes } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ActivityPage = () => {
  const searchParams = useSearchParams();
  const [getActitivies, activityResult] = useLazyGetActivityByIdQuery();
  const id = searchParams.get("id");
  const activity = activityResult.data;
  const router = useRouter();

  useEffect(() => {
    if (id) {
      getActitivies(id);
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
          <h1 className="text-3xl font-bold text-gray-800 my-4">
            {activity?.title}
          </h1>
          <div className="flex gap-4 flex-col">
            <div>{activity?.question}</div>
            {activity?.alternatives.map((option, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input type="radio" name="option" id={option.label} />
                <label htmlFor={option.label}>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ActivityPage;
