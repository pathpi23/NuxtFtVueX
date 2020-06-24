import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "required"
});

extend("email",
  (value) => {
    if(value.indexOf('@')!=-1){
    return true
  }
    return 'expected @'
})
