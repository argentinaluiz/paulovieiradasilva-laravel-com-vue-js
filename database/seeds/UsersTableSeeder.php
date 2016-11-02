<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(CodeFin\User::class, 1)
            ->states('admin')
            ->create([
                'name' => 'Paulo Vieira',
                'email' => 'admin@user.com'
            ]);

            factory(CodeFin\User::class, 1)
                ->create([
                    'name' => 'João Silva',
                    'email' => 'client@user.com'
                ]);
    }
}
