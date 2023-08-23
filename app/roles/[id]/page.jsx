/* eslint-disable @next/next/no-img-element */
import { airTableRequest } from "@/app/lib/airTableRequest";
import NotFound from "@/app/not-found";
import Markdown from "markdown-to-jsx";

const RolesPage = async ({ params }) => {
  const { fields } = await airTableRequest(params.id);
  return (
    <>
      {fields.error ? (
        <NotFound />
      ) : (
        <section className="lg:pb-16 bg-gray-50">
          <div className="container max-w-5xl -sm:p-0">
            {fields?.BannerWeb && (
              <img
                src={fields.BannerWeb}
                alt="Role Banner"
                className="md:block hidden"
              />
            )}
            {fields?.BannerMobile && (
              <img
                src={fields.BannerMobile}
                alt="Role Banner"
                className="block md:hidden"
              />
            )}
            <div className="px-8 pb-8 lg:px-20 lg:pb-20 lg:border border-gray-400 bg-white">
              <div className="mt-12 lg:mt-16 md:flex justify-between items-center">
                <p className="border-tender bg-gray-200 border-l-8 py-3 px-8 text-2xl font-light inline-block">
                  {fields?.roles}
                </p>
                <div className="md:text-right">
                  {fields.ApplyUrl && (
                    <a
                      href={fields.ApplyUrl}
                      className="btn bg-tender text-white rounded -sm:mt-8"
                    >
                      Apply Now
                    </a>
                  )}
                  {fields.recommend && (
                    <a
                      href="https://forms.theboardroomafrica.com/tbrarecommend"
                      className="underline block mt-3"
                    >
                      Recommend Someone
                    </a>
                  )}
                </div>
              </div>
              {fields.brief && (
                <div className="mt-12">
                  <h2 className="mb-4 text-xl">Company Background</h2>
                  <div className="prose max-w-full">
                    <Markdown>{fields.brief}</Markdown>
                  </div>
                </div>
              )}
              {fields.composition && (
                <div className="mt-12">
                  <h2 className="mb-4 text-xl">Current Board Composition</h2>
                  <div className="prose max-w-full">
                    <Markdown>{fields.composition}</Markdown>
                  </div>
                </div>
              )}
              {fields.requirements && (
                <div className="mt-12">
                  <h2 className="mb-4 text-xl">Role Requirements</h2>
                  <div className="prose max-w-full">
                    <Markdown>{fields.requirements}</Markdown>
                  </div>
                </div>
              )}
              {fields.tenure && (
                <div className="mt-12">
                  <h2 className="mb-4 text-xl">Board Tenure</h2>
                  <p>{fields.tenure}</p>
                </div>
              )}
              {fields.compensation && (
                <div className="mt-12">
                  <h2 className="mb-4 text-xl">Compensation</h2>
                  <p>{fields.compensation}</p>
                </div>
              )}
              <div className="mt-12">
                <h2 className="mb-4 text-xl">Board meetings</h2>
                <p>{fields["Board Meetings"]}</p>
              </div>

              {fields.notes && (
                <div className="mt-12 p-6 rounded bg-gray-100 prose max-w-full">
                  <Markdown>{fields.notes}</Markdown>
                </div>
              )}

              <div className="text-center mt-12">
                {fields.ApplyUrl && (
                  <a
                    href={fields.ApplyUrl}
                    className="btn bg-tender text-white rounded"
                  >
                    Apply Now
                  </a>
                )}
                {fields.recommend && (
                  <a
                    href="https://forms.theboardroomafrica.com/tbrarecommend"
                    className="underline block mt-4"
                  >
                    Recommend Someone
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default RolesPage;
