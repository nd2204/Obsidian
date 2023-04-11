read this: [arch wiki](https://wiki.archlinux.org/)
you might want to read this if you use none us layout keyboard (non qwerty)

#### checking the wifi
>[!important] checking the internet connection
>since installing the linux kernel involves installing pakages on the networks
>using cmd `ip addr show`
>check for your inet for an ip address
>

for laptop with wifi adapter:
- `iwctl`
then your console will look like this:
- ` [iwd] # `
after that list the wifi adapter using `device list`
if nothing appeared you might need to check your wifi/adapter before proceeding the installation
after that scan for a wifi:
- `station adapter_name scan` i.e: `station wlan0 scan`
connect to one using:
- `station adapter_name connect wifi_name` and fill the password/passphrase (if none -> blank)
then check the connection again using `ip a` which is the shorthand of `ip addr show` and ping test a server i.e: `ping archlinux.org` if no error then you're good to proceed

#### partitioning
none uefi and uefi with encrytion: [arch linux: full installation guide](https://www.youtube.com/watch?v=dplnbpm4dhi)

- efi system partition
	- size: 512m 
	- type: efi system
	- format: with mkfs.fat -f 32
- logical volumn manager
	- format(only after doing lvm section): mkfs.ext4 for both home and root
lvm:
- create partition volume:`pvcreate --dataalignment 1m /dev/sda2`
- create volume group: `vgcreate vol_group_name /dev/sda2`
- create logical volume: 
	- for root:`lvcreate -l 30gb volgroup0 -n root_lv`
	- for home:`lvcreate -l 100%free volgroup0 -n home_lv`
- activate lvm: 
	- `modprobe dm_mod`
	- `vgscan`
	- `vgchange -ay`
- format volume group:
	- `mkfs.ext4 /dev/volgroup0/root_lv`
	- `mkfs.ext4 /dev/volgroup0/home_lv`

mount root and home:
- root: `mount /dev/volgroup0/root_lv /mnt`
- home: 
	- `mkdir /mnt/home`
	- `mount /dev/volgroup0/home_lv /mnt/home`
mount fstab - finding partition on boot:
- `mkdir /mnt/etc`
- `genfstab -u -p /mnt >> /mnt/etc/fstab`
- check the logical volume we just create if it appeared: `cat /mnt/etc/fstab`

### configure the system
- install kernel and base
	- `pacstrap -i /mnt base linux linux-headers sudo vim`
- install dev tools: 
	- `arch-chroot /mnt` - this one require kernel
	- `pacman -s base-devel openssh` - `systemctl enable sshd`
- install network manager:
	- `pacman -s networkmanager wpa_supplicant wireless_tools netctl dialog lvm2`
	- enable it on boot using `systemctl enable networkmanager`
- edit mkinitcpio.conf:
	- `vim /etc/mkinitcpio.conf` - add lvm2 between block and filesystem in non comment hooks=()
	- `mkinitcpio -p linux`
- change time zone:
	- `vim /etc/locale.gen` - uncomment `en_us.utf-8 utf-8`
	- `locale-gen`
	- `echo "lang=en_us.utf-8" > /etc/locale.conf`
	- `ln -sf /usr/share/zoneinfo/asia/ho_chi_minh /etc/localtime`
	- `hwclock --systohc --utc`
- create password for root: `passwd` -type your password
- create standard user:
	- `useradd -m -g users -g wheel user_name`
	- create user password `passwd user_name` - type your password
- give sudoer privilage for users: `editor=vim visudo` - uncomment `%wheel all= (all) all`
- install and mount grub boot loader 
	- `pacman -s grub efibootmgr dosfstools os-prober mtools`
	- `mkdir /boot/efi`
	- `mount /dev/sda1 /boot/efi`
	- for arch86_64: `grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck`
	- check for locale dir: `ls -l /boot/grub` if not exist then `mkdir /boot/grub/locale`
	- `grub-mkconfig -o /boot/grub/grub.cfg`
- unmount and reboot:
	- `exit` - the super user
	- `umount -a`

### post installation
link: [archwiki](https://wiki.archlinux.org/title/installation_guide#:~:text=configure%20the%20system)
- swapfiles: 
	- `dd if=/dev/zero of=/swapfile bs=1m count=2048 status=progress`
	- change permission swapfile: `chmod 600 /swapfile`
	- make swapfile: `mkswap /swapfile`
	- create backup: `cp /etc/fstab /etc/fstab.bak`
	- add line into fstab: `echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab`
	- we should see the /swapfile at the end: `cat /etc/fstab`
	- `mount -a` 
	- `swapon -a`
- hostname: 
	- `echo prefered_hostname > /etc/hostname`
	- `vim /etc/hosts`
	- add these line
```
127.0.0.1 localhost
127.0.1.1 prefered_hostname
```
- cpu driver: `pacman -s intel-ucode` same for amd
install x11:
- install required packages:
	- `pacman -s xorg-server xorg-xinit xorg-apps xterm`
- install video driver:
	- `pacman -s virtualbox-guest-utils xf86-video-vmware` - this is for vm only `systemctl enable vboxservice`
	- `pacman -s xf86-video-intel/amdgpu/nvidia` - for other gpu
- install some popular fonts:
	- `pacman -s ttf-jetbrains-mono`
- update the system:
	- ` pacman -syu`
- install window manager (preferece):
	- `pacman -s lightdm nitrogen picom awesome`
	- uncomment and fill autologin-user=user_name and autologin-session=awesome in /etc/lightdm/lightdm.conf
	- enable `systemctl enable lightdm.service`
	- `groupadd -r autologin`
	- `gpasswd -a haru autologin`
	- `mkdir -p ~/.config/awesome`
	- `cp /etc/xdg/awesome/rc.lua ~/.config/awesome/`