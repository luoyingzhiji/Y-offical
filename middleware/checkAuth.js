import { deviceType } from "~/components/utils/deviceType";
export default function ({app,store,route, req, res, redirect,userAgent}) {

  let path=route.path;
  let isServer = process.server;
  userAgent = process.server
    ? req.headers["user-agent"]
    : navigator.userAgent;
  let facilityType = deviceType(userAgent).type;
  if(facilityType === "mobile"&&path.indexOf("/mobile")== -1){

    redirect("/mobile/");
  }
}
