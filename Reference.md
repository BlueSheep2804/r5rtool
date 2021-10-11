# `mp_weapon_[].txt` リファレンス
あくまでメモ


## `printname`
武器名

## `shortprintname`
画面右下に表示される名前

## `description`
説明

## `longdesc`
説明
TF2からの流用？

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

## `fire_sound_[ (number) ]_[ player_1p | player_3p | npc ]`
射撃時の音。  
`(number)`は1~3まではファイル内で確認  
最後のは省略可

## `sound_dryfire`
空撃ち時の音

## `sound_pickup`
取った時の音

## `sound_zoom_[ in | out ]`
覗いた時、覗き解除の時に鳴る音  
`Weapon_[]_ADS_[ In | Out ]`

## `low_ammo_sound_name_[ (number) ]`
弾薬が少ないときに撃つと一緒に鳴る音  
`(number)`は1~6まではファイル内で確認  
`[]_LowAmmo_Shot[ (number) ]`
