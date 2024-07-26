import '../styles/github.css'
import { FaGithubSquare } from 'react-icons/fa'
export default function GitHub() {
  return (
    <div>
      <a
        className="github"
        href="https://github.com/haruka-ogino/lucas-mansion-front-end"
      >
        <FaGithubSquare size={48} />
        GitHub Repo
      </a>
    </div>
  )
}
