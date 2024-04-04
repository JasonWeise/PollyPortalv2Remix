import {LoaderFunctionArgs, MetaFunction, redirect} from "@remix-run/node";


export async function loader({request}:LoaderFunctionArgs){
  //const user = await authenticator.isAuthenticated(request);

 // if(!user) return redirect("/login");
  return redirect('/app/home');

}

export const meta: MetaFunction = () => {
  return [
    { title: "Polly Portal v2" },
    { name: "description", content: "Polly Portal v2" },
  ];
};

export default function Index() {
  return(
      <></>
  );
}
