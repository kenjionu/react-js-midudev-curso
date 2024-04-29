import {useState} from "react";
interface TWDataProfile{
    userName: string;
    children: string | JSX.Element | JSX.Element[];
    initialIsFollowing?: boolean,
}
   export function TwitterFollowCard({ userName, children, initialIsFollowing}: TWDataProfile ) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    console.log('[TwitterFollowCard] render with userName', userName)
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    // ... resto del código del componente
    return (
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
          className='tw-followCard-avatar'
          alt='avatar midudev' src={`https://unavatar.io/${userName}`} />
          <div className="tw-followCard-info">
            {children}
            <span className='tw-followCard-infoUserName'>{`@${userName}`}</span>
          </div>
        </header>
        <aside>
            <button
                onClick={handleClick}
                className={buttonClassName}>
                {text}
            </button>
        </aside>
      </article>
    )
  }