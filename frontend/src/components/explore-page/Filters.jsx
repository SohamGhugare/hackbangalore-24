"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Label from "../ui/Label";
import { useState } from "react";

const Filters = () => {
  const [data, setData] = useState({
    socialImpact: "",
    environmentImpact: "",
    riskTolerance: "",
    investmentDuration: "",
  });
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, socialImpact: e });
            }}
          >
            <Label label="Social Imapact" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Social Impact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Poverty Alleviation">
                Poverty Alleviation
              </SelectItem>
              <SelectItem value="Gender Equality">Gender Equality</SelectItem>
              <SelectItem value="Social Justice and Equality">
                Social Justice and Equality
              </SelectItem>
              <SelectItem value="Community Development">
                Community Development
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, environmentImpact: e });
            }}
          >
            <Label label="Environment Imapact" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Environment Impact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Renewable Energy">Renewable Energy</SelectItem>
              <SelectItem value="Sustainable Agriculture">
                Sustainable Agriculture
              </SelectItem>
              <SelectItem value="Clean Technology">Clean Technology</SelectItem>
              <SelectItem value="Biodiversity Conservation">
                Biodiversity Conservation
              </SelectItem>
              <SelectItem value="Climate Change Mitigation and Adaptation">
                Climate Change Mitigation and Adaptation
              </SelectItem>
              <SelectItem value="Water and Sanitation">
                Water and Sanitation
              </SelectItem>
              <SelectItem value="Circular Economy">Circular Economy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, riskTolerance: e });
            }}
          >
            <Label label="Risk Tolerance" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Risk Tolerance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Low</SelectItem>
              <SelectItem value="2">Medium</SelectItem>
              <SelectItem value="3">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, investmentDuration: e });
            }}
          >
            <Label label="Investment Duration" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Investment Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Low</SelectItem>
              <SelectItem value="2">Medium</SelectItem>
              <SelectItem value="3">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#4fc87d] py-2 px-4 rounded-lg">
          Apply Filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
