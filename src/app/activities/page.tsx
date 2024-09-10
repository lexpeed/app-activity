"use client";

import { useSearchActivitiesQuery } from "@/api/activity/activityApi";
import {
  ActivityResultCard,
  Breadcrumbs,
  Container,
  Footer,
  Pagination,
} from "../../components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/utils";

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
        <div className="py-3">
          <Breadcrumbs
            items={[
              { label: "Home", url: "/" },
              { label: "Activities", url: "/activities" },
            ]}
          />
          <h1 className="text-5xl font-bold text-gray-800 my-4">Questões</h1>

          <div className="flex gap-4 flex-col">
            <div>
              <h3 className="text-lg mb-5">Filtros Avançados</h3>
              <div>
                <label>Matéria</label>
                <select>
                  <option>Matemática</option>
                  <option>Português</option>
                  <option>Geografia</option>
                  <option>História</option>
                  <option>Biologia</option>
                  <option>Química</option>
                  <option>Física</option>
                </select>
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-5">Resultados</h3>
              <div className="gap-4 grid grid-cols-2" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
