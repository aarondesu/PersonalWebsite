import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

export default function ContactPage() {
  return (
    <div className="flex md:flex-row flex-col m-auto font-Roboto">
      <div className="flex md:space-x-6 space-x-4">
        <div className="justify-items-end space-y-2">
          <div className="text-4xl font-black">Contact Me</div>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label>Test</label>
              <input />
            </div>
            <div className="flex flex-col">
              <label>Test</label>
              <input />
            </div>
          </form>
        </div>
        <div className="justify-start space-y-2">
          <div className="text-4xl font-black">Socials</div>
          <div className="flex flex-row space-x-2">
            <a href="#">
              <IconBrandLinkedin />
            </a>
            <a href="#">
              <IconBrandGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
