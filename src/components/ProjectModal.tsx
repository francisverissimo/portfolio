import { forwardRef } from "react";
import { ProjectFirestoreData } from "../types";
import { X, Globe, GithubLogo } from "phosphor-react";
import { TransitionProps } from "@mui/material/transitions";
import { AppBar, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ProjectDialogProps = {
  open: boolean;
  handleClose: () => void;
  project: ProjectFirestoreData | undefined;
};

export function ProjectDialog({ open, handleClose, project }: ProjectDialogProps) {
  return (
    <div>
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundImage: "linear-gradient(to top, #27272a, #3f3f46, #71717a)",
          },
        }}
      >
        {project && (
          <>
            <AppBar
              sx={{
                position: "relative",
                backgroundImage: "linear-gradient(to right, #27272a, #3f3f46, #71717a, #27272a)",
              }}
            >
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <X size={32} />
                </IconButton>

                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  {project.name}
                </Typography>
              </Toolbar>
            </AppBar>

            <div className="mx-auto flex w-full max-w-screen-lg flex-col justify-center pb-10 text-white">
              <img
                src={project.imageURL}
                className="max-w-full rounded-b"
                style={{
                  opacity: 0,
                  transform: "scale(0.86)",
                  transitionDuration: "200ms",
                }}
                onLoad={(t) => (
                  (t.currentTarget.style.opacity = "1"), (t.currentTarget.style.transform = "initial")
                )}
              />

              <div className="mx-4 mt-4 flex flex-col gap-4">
                <p className="font-sans text-xl font-medium">{project.name}</p>

                <p className="flex flex-wrap items-center gap-y-2 gap-x-2 border-b border-zinc-500/80 pb-4">
                  <span className="font-sans text-sm font-medium">{"STACK: "}</span>

                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="cursor-default rounded bg-pink-800 px-2 py-1 font-sans text-sm font-medium shadow-lg"
                    >
                      {item}
                    </span>
                  ))}
                </p>

                <div className="flex flex-wrap gap-4 border-b border-zinc-500/80 pb-4">
                  {project.applicationUrl && (
                    <div className="flex items-center gap-2 overflow-hidden rounded bg-zinc-800 p-2 duration-200 hover:text-orange-500">
                      <Globe />
                      <a className="truncate font-sans" target="_blank" href={project.applicationUrl}>
                        {project.applicationUrl.substring(8)}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-2 overflow-hidden rounded bg-zinc-800 p-2 duration-200 hover:text-orange-500">
                    <GithubLogo />
                    <a className="truncate font-sans" target="_blank" href={project.githubRepoUrl}>
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
