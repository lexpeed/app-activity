"use client";

import { useSearchActivitiesQuery } from "@/api/activity/activityApi";
import { ActivityResultCard, Footer, Pagination } from "../../components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/utils";
import { Container, Select, Breadcrumbs } from "@/components/eduque-components";

const itemsPerPage = 4;

const ActivitiesPage = () => {
  const [page, setPage] = useState(1);
  const { data: activities = [] } = useSearchActivitiesQuery();
  const router = useRouter();

  const filteredActivities = activities.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const goToActivity = (activityId: string) => {
    router.push(`${appRoutes.activityDetails}?id=${activityId}`);
  };

  const goToHome = () => {
    router.push(appRoutes.home);
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
        <div className="mt-8 py-3">
          <Breadcrumbs
            items={[
              { label: "Home", url: "/" },
              { label: "Activities", url: "/activities" },
            ]}
          />
          <h1
            className={`
              font-bold text-gray-800 my-4
              text-2xl sm:text-4xl md:text-5xl
            `}
          >
            Questões
          </h1>

          <div className="flex gap-4 flex-col">
            <div>
              <h3 className="text-lg mb-3">Filtros</h3>
              <div
                className={`
                  flex gap-2 flex-wrap
              `}
              >
                <Select>
                  <Select.Option>Português</Select.Option>
                  <Select.Option>Matemática</Select.Option>
                  <Select.Option>Biologia</Select.Option>
                </Select>

                <Select>
                  <Select.Option>Português</Select.Option>
                  <Select.Option>Matemática</Select.Option>
                  <Select.Option>Biologia</Select.Option>
                </Select>

                <Select>
                  <Select.Option>Português</Select.Option>
                  <Select.Option>Matemática</Select.Option>
                  <Select.Option>Biologia</Select.Option>
                </Select>
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-5">Resultados</h3>
              <div
                className={`
                  gap-4 grid
                  md:grid-cols-2
                `}
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                {filteredActivities.map((activity, index) => (
                  <ActivityResultCard
                    key={index}
                    tags={activity.tags}
                    onClick={() => goToActivity(activity.id)}
                  >
                    {activity.questions?.[0]?.content ?? ""}
                  </ActivityResultCard>
                ))}
              </div>
            </div>
            <Pagination
              currentPage={page}
              itemsPerPage={itemsPerPage}
              totalItems={activities.length}
              onPageChange={(page) => setPage(page)}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
