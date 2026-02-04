import { Mail, Linkedin, Github } from "feather-icons-react";

export default function ContactMe() {
  const iconsSize = '32'
  return (
    <div className='flex justify-end gap-24 flex-wrap mobile-view'>
      <a className='flex items-center gap-3'
        href="mailto:lucas@lcrezende.dev.br"
      >
        <Mail size={iconsSize}/>
        <span>lucas@lcrezende.dev.br</span>
      </a>
      
      <a className='flex items-center gap-3'
        href="https://www.linkedin.com/in/lucas-c-rezende/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={iconsSize}/>
        <span>linkedin.com/in/lucas-c-rezende/</span>
      </a>

      <a className='flex items-center gap-3'
        href="https://github.com/rezendelc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={iconsSize}/>
        <span>github.com/rezendelc</span>
      </a>
    </div>
  );
}