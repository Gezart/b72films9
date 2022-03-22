import React from 'react'

const Home = () => {
  return (
    <>
        <form method="post" action="http://b72films9.com/wp-json/wp/v2/users">
		<label>
			Username
			<input type="text" name="name" />
		</label>
		<label>
			Email
			<input type="email" name="email" />
		</label>
		<label>
			Password
			<input type="password" name="password" />
		</label>
		<label>
			<input type="submit" name="submit" />
		</label>
		</form>
    </>
  )
}

export default Home
