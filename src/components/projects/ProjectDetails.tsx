import { ProjectDetailsProps } from "@/interfaces/shared-interfaces";
import AnimatedButton from "../animatedButton/AnimatedButton";

export default function ProjectDetailsComponent({ project }: { project: ProjectDetailsProps }) {
  const { features, description, sourceCode, visitNow } = project;
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex justify-between items-start gap-10">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Project Description</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {features && features.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start space-x-3 ">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 font-semibold hover:text-primary duration-300 transition-all scale-95 cursor-pointer hover:scale-100">
                      {feature.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-4 w-2/10 items-center justify-center cursor-pointer">
          <AnimatedButton variant="primary" text="Live Site" href={visitNow} />
          <AnimatedButton variant="outline" text="Source Code" href={sourceCode} />
        </div>
      </div>
    </div>
  );
}
