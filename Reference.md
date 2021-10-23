# `mp_weapon_[].txt` リファレンス
あくまでメモ


# `WeaponData`

## `printname`
武器名

## `shortprintname`
画面右下に表示される名前

## `description`
説明

## `longdesc`
説明
TF2からの流用？

## `weapon_type_flags`
とりあえず`WPT_PRIMARY`にすればいい  
~~scriptsかなんかでで定義されてるのを見た気がする~~

## `menu_icon`
アイコン

## `hud_icon`
アイコン  
~~正直上との違いわからん~~

## `viewmodel`
手に持った時のモデル  
`mdl/weapons/[]/ptpov_[].rmdl`

## `playermodel`
モデル  
`mdl/weapons/[]/w_[].rmdl`

## `damage_type`
とりあえず`bullet`って入れときゃいい

## `damage_[ near | far | very_far ]_value`
ダメージ

## `allow_headshots`
ヘッドショットが可能か否か

## `damage_headshot_scale`
ヘッドショット倍率

## `damage_leg_scale`
手足に撃った場合のダメージ倍率
R5Rだと適用されないっぽい？

## `fire_mode`
とりあえず`automatic`って入れときゃいい

## `is_semi_auto`
セミオートかどうか  
`0 | 1`

## `fire_rate`
発射レート。小数も受け付ける。

## `projectile_launch_speed`
弾速  
値が大きいと速くなる

## `burst_fire_count`
バースト回数  
フルオート / セミオートに戻したいなら`1`ではなく`0`(`1`にすると↓の影響を受ける)

## `burst_fire_delay`
バースト間隔

## `fire_sound_[ (number) ]_[ player_1p | player_3p | npc ]`
射撃時の音。  
`(number)`は1~3まではファイル内で確認  
最後のは省略可

## `sound_dryfire`
空撃ち時の音

## `sound_pickup`
取った時の音

## `looping_sounds`
基本`0`  
ループしている銃声はレートが同じだと違和感がない、それ以外だと違和感しかない

## `sound_zoom_[ in | out ]`
ADS時、非ADS時に鳴る音  
`Weapon_[]_ADS_[ In | Out ]`

## `low_ammo_sound_name_[ (number) ]`
弾薬が少ないときに撃つと一緒に鳴る音  
`(number)`は1~6まではファイル内で確認  
`[]_LowAmmo_Shot[ (number) ]`

## `ammo_pool_type`
弾薬を決める
|ゲーム内|値|
|:--:|:--:|
|ライトアモ|`bullet`|
|ヘビーアモ|`highcal`|
|エネルギーアモ|`special`|
|ショットガンアモ|`shotgun`|

## `uses_ammo_pool`
上で指定した弾薬を消費するか

## `ammo_clip_size`
マガジンの弾数

## `ammo_default_total`
わからん

## `ammo_stockpile_max`
ケアパケ武器などに使われる元からある弾

## `ammo_no_remove_from_stockpile`
上で指定した弾を消費するか否か

## `ammo_per_shot`
1発撃つごとに消費する弾薬の数

## `ammo_min_to_fire`
最小の撃てるマガジンの弾数

## `reload_time`
タクティカルリロードにかかる時間

## `reload_time_late[ 1-5 ]`
タクティカルリロードにかかる時間  
おそらく壁キックとかで中断されたリロードのやつ

## `reloadempty_time`
リロードにかかる時間

## `reloadempty_time_late[ 1-5 ]`
リロードにかかる時間  
おそらく壁キックとかで中断されたリロードのやつ

## `ammo_min_to_fire`
最小の撃てるマガジンの弾数

## `viewmodel_jolt_scale`
覗いた際のviewmodelの奥行きのブレ  
+が奥, -が手前に来る

## `viewmodel_jolt_backwardPerShot`
上と同じ？  
+が奥, -が手前に来る

## `viewmodel_jolt_roll`
覗いた際のviewmodelの傾き  
レティクルは常に中央に固定  
`<右> <左右ランダム？> <左>`で指定する

## `viewmodel_jolt_side`
覗いた際のviewmodelの移動
上と違いレティクルも動く  
`<左> <左右ランダム？> <右>`で指定する

## `viewkick_<pitch | yaw | roll>_base`
1発ごとの反動  
`pitch`は上、`yaw`は右、`roll`は左傾き

## `viewkick_<pitch | yaw>_random`
ランダムリコイルの最大値

## `viewkick_<pitch | yaw>_random_innerexclude`
上で指定した範囲の内部をランダムから除外する  
例えば`random`が`10`で`random_innerexclude`を`2`にすると2~10の間で値が決定する  
~~細かく検証してないけど多分そういうこと~~

## `viewkick_roll_random<Min | Max>`
傾きのランダムの範囲を指定する

## `viewkick_<pitch | yaw | roll>_softScale`
わからんけど値をデカくすると反動が増える

## `viewkick_<pitch | yaw | roll>_hardScale`
わからんけど値をデカくすると反動が増える


# `Mods`

## `gold`
金

## `survival_finite_ammo`
わからん  
~~弾数無限とか関係してる？~~

## `[ ammoType ]_mag_l[ 1-3 ]`
拡張マガジンが付けられた際の挙動を決める
|ゲーム内|値|
|:--:|:--:|
|ライトアモ|`bullets`|
|ヘビーアモ|`highcal`|
|エネルギーアモ|`energy`|
