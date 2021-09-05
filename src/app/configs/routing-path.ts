export class RoutingPath {
  public static appRouting = {
    components: {
      landing_page: {
        path: "landing-page",
        breadcrumb: "Home",
        pages: {
          home: {
            path: "home",
            breadcrumb: "About me",
          },
          skill: {
            path: "skill",
            breadcrumb: "Skills",
          },
          work_experience: {
            path: "work-experience",
            breadcrumb: "Experience",
          },
          contact: {
            path: "contact",
            breadcrumb: "Contact",
          },
          projects: {
            path: "projects",
            breadcrumb: "Projects",
            pages: {
              project_details: {
                path: "project-details/:projectId",
                breadcrumb: "Details",
              },
            }
          },
        }
      }
    }
  };
}
