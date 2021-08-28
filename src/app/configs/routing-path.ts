export class RoutingPath {
  public static appRouting = {
    components: {
      landing_page: {
        path: "landing-page",
        pages: {
          home: {
            path: "home",
          },
          skill: {
            path: "skill",
          },
          work_experience: {
            path: "work-experience",
          },
          contact: {
            path: "contact",
          },
          projects: {
            path: "projects",
          },
        }
      },
      project: {
        path: "project",
        pages: {
          project_details: {
            path: "project-details/:projectId",
          },
        }
      },
    }
  };
}
