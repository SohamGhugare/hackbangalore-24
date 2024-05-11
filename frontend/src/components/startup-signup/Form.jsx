import FormInput from "../ui/FormInput";
import Label from "../ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Form = ({ formData, setFormData }) => {
  console.log(formData);
  const handlePassChange = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };
  const handleCPassChange = (event) => {
    setFormData({ ...formData, cpass: event.target.value });
  };
  return (
    <section className="flex flex-col items-center bg-white shadow-lg w-80 mt-6 md:w-[40rem] rounded-lg m-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <div>
          <Label label={"Startup Name"} htmlFor={"name"} />
          <FormInput
            type={"text"}
            id="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>
        <div>
          <Label label={"Email"} htmlFor={"email"} />
          <FormInput
            type={"email"}
            id="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div>
          <Label label={"URL for website"} htmlFor={"url"} />
          <FormInput
            type={"text"}
            id="url"
            value={formData.url}
            onChange={(e) => {
              setFormData({ ...formData, url: e.target.value });
            }}
          />
        </div>
        <div>
          <Label label={"Stage of Development"} htmlFor={"stage"} />
          <Select
            onValueChange={(e) => {
              console.log("trigger");
              setFormData({
                ...formData,
                stage_of_development: e,
              });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose stage of startup" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Idea Phase">Idea Phase</SelectItem>
              <SelectItem value="Prototype/MVP">Prototype/MVP</SelectItem>
              <SelectItem value="Early Stage (Generating Revenue)">
                Early Stage (Generating Revenue)
              </SelectItem>
              <SelectItem value="Growth Stage">Growth Stage</SelectItem>
              <SelectItem value="Mature Stage">Mature Stage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default Form;
