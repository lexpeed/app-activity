'use client';

import { Footer, SimpleHeader } from '@/components';
import {
  Container,
  Breadcrumbs,
  Tag,
  Button,
} from '@/components/eduque-components';
import { appRoutes } from '@/utils';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import {
  LeftOutlined,
  HeartOutlined,
  PrinterOutlined,
  ShareAltOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { useLazyGetActivityByIdQuery } from '@/api/activity/activity-api';

const iconActions = [
  { icon: <HeartOutlined />, label: 'Favoritar' },
  { icon: <PrinterOutlined />, label: 'Imprimir' },
  { icon: <ShareAltOutlined />, label: 'Compartilhar' },
  { icon: <NotificationOutlined />, label: 'Notificar' },
];

const ActivityPage = () => {
  const [getActivity, activityResult] = useLazyGetActivityByIdQuery();
  const router = useRouter();
  const htmlContent = activityResult.data?.htmlContent || '';
  const params = useParams();
  const auth = useAuth();

  useEffect(() => {
    const id = params.id as string;
    if (id) {
      getActivity(id);
    }
  }, [params, getActivity]);

  const goToActivities = () => {
    router.push(appRoutes.activities);
  };

  const goBack = () => {
    router.back();
  };

  const onDownloadWord = async () => {
    const response = await fetch('/api/ms-word', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        html: htmlContent,
        filename: 'activity.docx',
      }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'activity.docx';
    a.click();
  };

  return (
    <div className="py-2">
      <SimpleHeader />
      <Container>
        <div className="py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', url: '/' },
              {
                label: 'Activities',
                url: '/activities',
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
              <span>{activityResult.data?.title}</span>
              {auth.isAuthenticated ? (
                <Button onClick={onDownloadWord}>Baixar em Word</Button>
              ) : (
                <Button
                  onClick={() =>
                    auth.signinRedirect({
                      redirect_uri: auth.settings.redirect_uri.concat(
                        window.location.pathname
                      ),
                    })
                  }
                >
                  Baixar em Word
                </Button>
              )}

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
