﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba22
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотруд.
    /// </summary>
    // *** Start programmer edit section *** (Сотруд CustomAttributes)

    // *** End programmer edit section *** (Сотруд CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудE", new string[0])]
    [AssociatedDetailViewAttribute("СотрудE", "ТЧСотруд", "ТЧСотрудE", true, "", "Т ч сотруд", true, new string[] {
            ""})]
    [View("СотрудL", new string[0])]
    public class Сотруд : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Proba22.DetailArrayOfТЧСотруд fТЧСотруд;
        
        // *** Start programmer edit section *** (Сотруд CustomMembers)

        // *** End programmer edit section *** (Сотруд CustomMembers)

        
        /// <summary>
        /// Сотруд.
        /// </summary>
        // *** Start programmer edit section *** (Сотруд.ТЧСотруд CustomAttributes)

        // *** End programmer edit section *** (Сотруд.ТЧСотруд CustomAttributes)
        public virtual IIS.Proba22.DetailArrayOfТЧСотруд ТЧСотруд
        {
            get
            {
                // *** Start programmer edit section *** (Сотруд.ТЧСотруд Get start)

                // *** End programmer edit section *** (Сотруд.ТЧСотруд Get start)
                if ((this.fТЧСотруд == null))
                {
                    this.fТЧСотруд = new IIS.Proba22.DetailArrayOfТЧСотруд(this);
                }
                IIS.Proba22.DetailArrayOfТЧСотруд result = this.fТЧСотруд;
                // *** Start programmer edit section *** (Сотруд.ТЧСотруд Get end)

                // *** End programmer edit section *** (Сотруд.ТЧСотруд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотруд.ТЧСотруд Set start)

                // *** End programmer edit section *** (Сотруд.ТЧСотруд Set start)
                this.fТЧСотруд = value;
                // *** Start programmer edit section *** (Сотруд.ТЧСотруд Set end)

                // *** End programmer edit section *** (Сотруд.ТЧСотруд Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудE", typeof(IIS.Proba22.Сотруд));
                }
            }
            
            /// <summary>
            /// "СотрудL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудL", typeof(IIS.Proba22.Сотруд));
                }
            }
        }
    }
}
