import FormInput from "../ui/FormInput";
import Label from "../ui/Label";

const Form = ({ formData, setFormData }) => {
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
          <Label label={"Full Name"} htmlFor={"name"} />
          <FormInput
            type={"text"}
            id="name"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <div>
          <Label label={"password"} htmlFor={"password"} />
          <FormInput
            type={"password"}
            id="password"
            value={formData.password}
            onChange={handlePassChange}
          />
        </div>
        <div>
          <Label label={"Confirm Password"} htmlFor={"cpass"} />
          <FormInput
            type={"password"}
            id="cpass"
            value={formData.cpass}
            onChange={handleCPassChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
