import React from 'react'
import {NavLink} from 'react-router-dom'
import userPhoto from "../../assets/images/images.jpg";
import styles from "./users.module.css";







let Users = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
      );
      let pages = [];
      for (let i = 1; i <=pagesCount; i++) {
        pages.push(i);
      }
   return <div>
        <div>
          {pages.map(p => {
          return  <span onClick={(e) => {
            props.onPageChanged(p)
          }} className={props.currentPage === p && styles.selectedPage}>{p}</span>
          })}

      
      </div>
        {props.users.map(u => (
          <div key={u.id}>
            <span>
              <NavLink to={'/profile/'+ u.id}>              <div>
                <img src={u.photos.small !=null ? u.photos.small : userPhoto } className={styles.userphoto} />
              </div>
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                     props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                     props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    
                }

                export default Users
