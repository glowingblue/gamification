<?php

/*
 * This file is part of fof/gamification.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Gamification\Access;

use Flarum\Post\Post;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;

class PostPolicy extends AbstractPolicy
{
	/**
	 * {@inheritdoc}
	 */
	protected $model = Post::class;

	/**
	 * @param User $actor
	 * @param Post $post
	 *
	 * @return bool
	 */
	public function vote(User $actor, Post $post)
	{
		// Authors aren't authorized to vote thier own posts
		if ($post->user_id == $actor->id) {
			return false;
		}
		return true;
	}
}
