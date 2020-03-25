import React, {HTMLAttributes} from 'react';
import TwitterIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/twitterIcon/twitterIcon';
import LinkedInIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/linkedInIcon/linkedInIcon';
import AngelListIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/angelListIcon/angelListIcon';
import ChevronIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/chevronIcon/chevronIcon';
import PlusIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/plusIcon/plusIcon';
import ApplyIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/applyIcon/applyIcon';
import HeartIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/heartIcon/heartIcon';
import {AppIcon} from '../../types/iconsTypes/enums';
import MessageIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/messageIcon/messageIcon';
import SaveIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/saveIcon/saveIcon';
import NetworkIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/networkIcon';
import MentorsIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/mentorsIcon/mentorsIcon';
import KeyBoardArrowDown from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/keyBoardArrowDown/keyBoardArrowDown';
import KeyBoardArrowRight from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/keyBoardArrowRight/KeyBoardArrowRight';
import IgnitusFullLogo from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/ignitusFullLogo';
import CreateIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/createIcon/createIcon';
import ClearIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/clearIcon';
import LocationOnIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/locationOnIcon';
import QuestionAnswerIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/questionAnswerIcon';
import AccountCircleIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/accountCircleIcon';
import SearchIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/SearchIcon';
import NotificationIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/notificationIcon';
import GithubIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/githubIcon';
import FacebookIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/facebookIcon';
import GooglePlusIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/googlePlusIcon/googlePlusIcon';
import InfoIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/infoIcon';
import PdfIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/pdfIcon';
import LibraryBooksIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/libraryBooksIcon';
import LocalLibraryIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/localLibraryIcon';
import GraduationCapIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/graduationCapIcon';

type Props = {
  name: AppIcon;
} & HTMLAttributes<SVGElement>;

const Icon = ({name, ...rest}: Props) => {
  switch (name) {
    case AppIcon.AngelListIcon:
      return <AngelListIcon {...rest} />;

    case AppIcon.ApplyIcon:
      return <ApplyIcon {...rest} />;

    case AppIcon.Chevron:
      return <ChevronIcon {...rest} />;

    case AppIcon.HeartIcon:
      return <HeartIcon {...rest} />;

    case AppIcon.LinkedInIcon:
      return <LinkedInIcon {...rest} />;

    case AppIcon.PlusIcon:
      return <PlusIcon {...rest} />;

    case AppIcon.TwitterIcon:
      return <TwitterIcon {...rest} />;

    case AppIcon.MessageIcon:
      return <MessageIcon {...rest} />;

    case AppIcon.SaveIcon:
      return <SaveIcon {...rest} />;

    case AppIcon.NetworkIcon:
      return <NetworkIcon {...rest} />;

    case AppIcon.MentorsIcon:
      return <MentorsIcon {...rest} />;

    case AppIcon.KeyBoardArrowDown:
      return <KeyBoardArrowDown {...rest} />;

    case AppIcon.KeyBoardArrowRight:
      return <KeyBoardArrowRight {...rest} />;

    case AppIcon.IgnitusFullLogo:
      return <IgnitusFullLogo {...rest} />;

    case AppIcon.CreateIcon:
      return <CreateIcon {...rest} />;

    case AppIcon.ClearIcon:
      return <ClearIcon {...rest} />;

    case AppIcon.LocationOnIcon:
      return <LocationOnIcon {...rest} />;

    case AppIcon.QuestionAnswerIcon:
      return <QuestionAnswerIcon {...rest} />;

    case AppIcon.AccountCircleIcon:
      return <AccountCircleIcon {...rest} />;

    case AppIcon.SearchIcon:
      return <SearchIcon {...rest} />;

    case AppIcon.NotificationIcon:
      return <NotificationIcon {...rest} />;
  
        

    case AppIcon.GithubIcon:
      return <GithubIcon {...rest} />;

    case AppIcon.FacebookIcon:
      return <FacebookIcon {...rest} />;

    case AppIcon.GooglePlusIcon:
      return <GooglePlusIcon {...rest} />;

    case AppIcon.InfoIcon:
      return <InfoIcon {...rest} />;

    case AppIcon.PdfIcon:
      return <PdfIcon {...rest} />;

    case AppIcon.LibraryBooksIcon:
      return <LibraryBooksIcon {...rest} />;

    case AppIcon.LocalLibraryIcon:
      return <LocalLibraryIcon {...rest} />;

    case AppIcon.GraduationCapIcon:
      return <GraduationCapIcon {...rest} />;
  }
};

export default Icon;
