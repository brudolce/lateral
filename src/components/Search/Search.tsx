import React from "react";
import SearchStyles from "./Search.styles";
import { useForm } from "react-hook-form";

interface FormProps {
  question?: string;
  category?: string;
  action?: any;
}

const Form: React.FC<FormProps> = ({

  action = (arg: string) => console.log(arg),
}: FormProps) => {
  const CSS = SearchStyles.factory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    action(data);
    reset();
  };
  return (
    <div style={CSS.searchContainer()}>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input
            name="searchURL"
            ref={register}
            placeholder="Type a search URL"
            style={CSS.input()}
           
          />
          <input type="submit" value="Search" style={CSS.submit()} id="search-button"/>
        </form>

        <div></div>

    </div>
  );
};

export default Form;
