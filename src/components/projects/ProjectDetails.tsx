"use client";
import { ProjectDetailsProps } from "@/interfaces/shared-interfaces";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import ImageSlider from "./ImageSlider";
import ShutterMotion from "../animation/ShutterMotion";

export default function ProjectDetailsComponent({ project }: { project: ProjectDetailsProps }) {
  const { features, sourceCode, visitNow, images1, images2, name } = project;
  return (
    <ShutterMotion className="container mx-auto px-4 my-10">
      <div className="lg:flex justify-between items-start gap-10">
        <div className="space-y-6">
          {features && features.length > 0 && (
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-3xl font-bold mb-4 text-gray-800 ">Key Features</h3>
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

        <div className="flex lg:flex-col space-y-4 justify-center gap-4 my-4 lg:my-0 cursor-pointer">
          <InteractiveHoverButton target="_blank" href={visitNow} className="w-fit">
            Live Site
          </InteractiveHoverButton>
          <AnimatedButton variant="outline" text="Source Code" target="_blank" href={sourceCode} />
        </div>
      </div>

      <ImageSlider images1={images1 || []} images2={images2 || []} name={name} />
    </ShutterMotion>
  );
}
