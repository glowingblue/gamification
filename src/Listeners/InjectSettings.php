<?php

/*
 * This file is part of fof/gamification.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Gamification\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class InjectSettings
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'permissions']);
    }

    /**
     * @param Serializing $event
     */
    public function permissions(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['fof-gamification.pointsPerDiscussion'] = $this->settings->get('fof-gamification.pointsPerDiscussion', 5);
            $event->attributes['fof-gamification.pointsPerComment'] = $this->settings->get('fof-gamification.pointsPerComment', 8);
            $event->attributes['fof-gamification.pointsPerUpvote'] = $this->settings->get('fof-gamification.pointsPerUpvote', 13);
            $event->attributes['fof-gamification.pointsForNewLevel'] = $this->settings->get('fof-gamification.pointsForNewLevel', 55);
        }
    }
}
