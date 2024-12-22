import { Card, Container } from "@mui/material";
import Image from "next/image";

export const Experience = () => {
  return (
    <div className="flex h-[95vh]">
      <div className="w-1/2">
        <Image
          src="/images/Graphics-2.png"
          alt="Rachel"
          width={500}
          height={500}
        />
        <div className="flex pl-3 pr-3">
          <span className="fa-solid fa-quote-left text-[#580479]"></span>
          <span className="radio-canada-normal text-[#898486] w-[37.5rem]">
            I'm super passionate about every part of the design process, from
            brainstorming and teamwork to creating and executing ideas. But the
            real magic? Seeing the final product in action, doing exactly what
            it was made to do!
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="flex text-3xl text-themePrimary justify-start my-3">
          My Skills
        </h2>
        <div className="h-1/3">
          <h3 className="text-lg ps-2 text-[#7d1942]">Coding</h3>
          <Container className="flex-wrap px-0">
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>HTML5</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>CSS</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>JavaScript</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>React</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Next.js</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Tailwind</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Bootstrap</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Git</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>GitHub</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Python</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Django</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Responsive Design</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>CI/CD Pipeline</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>API Documentation</small>
            </Card>
          </Container>
        </div>

        <div className="h-1/3">
          <h3 className="text-lg ps-2 text-[#7d1942]">Design</h3>
          <Container className="flex-wrap px-0">
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Wireframing</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Prototyping</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Mock Ups</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Logo design</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Brand guideines</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Usability testing</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>User-flows</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Visual Design</small>
            </Card>
          </Container>
        </div>

        <div className="h-1/3">
          <h3 className="text-lg ps-2 text-[#7d1942]">Tools</h3>
          <Container className="flex-wrap px-0">
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>VS Code</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Postman</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Swagger</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Heroku</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Figma</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Canva</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Adobe Illustrator</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Adobe PhotoShop</small>
            </Card>
            <Card
              className="flex items-center inline-flex px-6 py-2 justify-center rounded-lg m-1"
              sx={{
                background:
                  "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
                boxShadow: "none",
              }}
            >
              <small>Jira</small>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
};
