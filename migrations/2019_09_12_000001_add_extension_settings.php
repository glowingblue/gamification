<?php

/*
 * This file is part of fof/gamification.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        /**
         * @var SettingsRepositoryInterface
         */
        $settings = app('flarum.settings');

        $items = [
            'pointsPerDiscussion' => 10,
            'pointsPerComment' => 21,
            'pointsPerUpvote' => 31,
            'pointsForNewLevel' => 135,
        ];

        foreach ($items as $key => $value) {
            $settings->set("fof-gamification.$key", $value);
        }
    },
    'down' => function (Builder $schema) {
        //
    },
];
