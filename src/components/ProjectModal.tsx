import { forwardRef } from "react";
import { ProjectFirestoreData } from "../types";
import { X, Globe, GithubLogo } from "phosphor-react";
import { TransitionProps } from "@mui/material/transitions";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ProjectDialogProps = {
  handleClose: () => void;
  project: ProjectFirestoreData | undefined;
};

export function ProjectDialog({ handleClose, project }: ProjectDialogProps) {
  return (
    <div>
      <Dialog
        open
        fullScreen
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundImage:
              "linear-gradient(to top, #27272a, #3f3f46, #71717a)",
          },
        }}
      >
        {project && (
          <>
            <AppBar
              sx={{
                position: "relative",
                backgroundImage:
                  "linear-gradient(to right, #27272a, #3f3f46, #71717a, #27272a)",
              }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <X size={32} />
                </IconButton>

                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  {project.name}
                </Typography>
              </Toolbar>
            </AppBar>

            <div className="max-w-screen-lg w-full mx-auto flex text-white flex-col justify-center pb-10">
              <img
                src={project.imageURL}
                className="rounded-b max-w-full"
                style={{
                  opacity: 0,
                  transform: "scale(0.86)",
                  transitionDuration: "200ms",
                }}
                onLoad={(t) => (
                  (t.currentTarget.style.opacity = "1"),
                  (t.currentTarget.style.transform = "initial")
                )}
              />

              <div className="mx-4 mt-4 flex flex-col gap-4">
                <p className="text-xl font-medium font-sans">{project.name}</p>

                <p className="flex gap-y-2 gap-x-2 items-center flex-wrap border-b border-zinc-500/80 pb-4">
                  <span className="font-sans font-medium text-sm">
                    {"STACK: "}
                  </span>

                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="font-sans text-sm font-medium bg-pink-800 px-2 py-1 rounded cursor-default shadow-lg"
                    >
                      {item}
                    </span>
                  ))}
                </p>

                <div className="flex gap-4 flex-wrap border-b border-zinc-500/80 pb-4">
                  {project.applicationUrl && (
                    <div className="flex items-center gap-2 bg-zinc-800 p-2 rounded duration-200 hover:text-orange-500 overflow-hidden">
                      <Globe />
                      <a
                        className="truncate font-sans"
                        target="_blank"
                        href={project.applicationUrl}
                      >
                        {project.applicationUrl.substring(8)}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-2 bg-zinc-800 p-2 rounded duration-200 hover:text-orange-500 overflow-hidden">
                    <GithubLogo />
                    <a
                      className="truncate font-sans"
                      target="_blank"
                      href={project.githubRepoUrl}
                    >
                      {project.githubRepoUrl.substring(8)}
                    </a>
                  </div>
                </div>

                <div>{project.description}</div>
              </div>
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
}
