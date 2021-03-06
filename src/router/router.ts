import { Request, Response } from "express";

import { registerProject, updateProject, getProject } from "../requestHandlers/register";
import deployHandler from "../requestHandlers/deploy";

interface RouteInterface {
  type: "POST" | "GET" | "PUT" | "DELETE";
  path: String,
  async: Boolean,
  handler: (req: Request, res: Response) => any,
  validationSchema: any
}

export default [
  {
    path: '/project',
    type: 'GET',
    handler: getProject,
    validationSchema: require("../jsonSchemas/project.json")
  },
  {
    path: '/project/register',
    type: 'POST',
    handler: registerProject,
    validationSchema: require("../jsonSchemas/register.json")
  },
  {
    path: '/project/update',
    type: 'POST',
    handler: updateProject,
    validationSchema: require("../jsonSchemas/update.json")
  },
  {
    path: '/webhook',
    type: 'POST',
    async: true,
    handler: deployHandler,
    validationSchema: require("../jsonSchemas/webhook.json")
  },
] as RouteInterface[];
