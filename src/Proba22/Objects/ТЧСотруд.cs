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
    /// Т ч сотруд.
    /// </summary>
    // *** Start programmer edit section *** (ТЧСотруд CustomAttributes)

    // *** End programmer edit section *** (ТЧСотруд CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч сотруд")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧСотрудE", new string[] {
            "ФИОСотр as \'Ф и о сотр\'",
            "ДолжнСотр as \'Должн сотр\'"})]
    public class ТЧСотруд : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИОСотр;
        
        private string fДолжнСотр;
        
        private IIS.Proba22.Сотруд fСотруд;
        
        // *** Start programmer edit section *** (ТЧСотруд CustomMembers)

        // *** End programmer edit section *** (ТЧСотруд CustomMembers)

        
        /// <summary>
        /// ДолжнСотр.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСотруд.ДолжнСотр CustomAttributes)

        // *** End programmer edit section *** (ТЧСотруд.ДолжнСотр CustomAttributes)
        [StrLen(255)]
        public virtual string ДолжнСотр
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСотруд.ДолжнСотр Get start)

                // *** End programmer edit section *** (ТЧСотруд.ДолжнСотр Get start)
                string result = this.fДолжнСотр;
                // *** Start programmer edit section *** (ТЧСотруд.ДолжнСотр Get end)

                // *** End programmer edit section *** (ТЧСотруд.ДолжнСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСотруд.ДолжнСотр Set start)

                // *** End programmer edit section *** (ТЧСотруд.ДолжнСотр Set start)
                this.fДолжнСотр = value;
                // *** Start programmer edit section *** (ТЧСотруд.ДолжнСотр Set end)

                // *** End programmer edit section *** (ТЧСотруд.ДолжнСотр Set end)
            }
        }
        
        /// <summary>
        /// ФИОСотр.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСотруд.ФИОСотр CustomAttributes)

        // *** End programmer edit section *** (ТЧСотруд.ФИОСотр CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОСотр
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСотруд.ФИОСотр Get start)

                // *** End programmer edit section *** (ТЧСотруд.ФИОСотр Get start)
                string result = this.fФИОСотр;
                // *** Start programmer edit section *** (ТЧСотруд.ФИОСотр Get end)

                // *** End programmer edit section *** (ТЧСотруд.ФИОСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСотруд.ФИОСотр Set start)

                // *** End programmer edit section *** (ТЧСотруд.ФИОСотр Set start)
                this.fФИОСотр = value;
                // *** Start programmer edit section *** (ТЧСотруд.ФИОСотр Set end)

                // *** End programmer edit section *** (ТЧСотруд.ФИОСотр Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proba22.Сотруд.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСотруд.Сотруд CustomAttributes)

        // *** End programmer edit section *** (ТЧСотруд.Сотруд CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Сотруд"})]
        public virtual IIS.Proba22.Сотруд Сотруд
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСотруд.Сотруд Get start)

                // *** End programmer edit section *** (ТЧСотруд.Сотруд Get start)
                IIS.Proba22.Сотруд result = this.fСотруд;
                // *** Start programmer edit section *** (ТЧСотруд.Сотруд Get end)

                // *** End programmer edit section *** (ТЧСотруд.Сотруд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСотруд.Сотруд Set start)

                // *** End programmer edit section *** (ТЧСотруд.Сотруд Set start)
                this.fСотруд = value;
                // *** Start programmer edit section *** (ТЧСотруд.Сотруд Set end)

                // *** End programmer edit section *** (ТЧСотруд.Сотруд Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧСотрудE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧСотрудE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧСотрудE", typeof(IIS.Proba22.ТЧСотруд));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧСотруд.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧСотруд CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧСотруд CustomAttributes)
    public class DetailArrayOfТЧСотруд : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proba22.DetailArrayOfТЧСотруд members)

        // *** End programmer edit section *** (IIS.Proba22.DetailArrayOfТЧСотруд members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧСотруд by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧСотруд.
        /// </summary>
        public DetailArrayOfТЧСотруд(IIS.Proba22.Сотруд fСотруд) : 
                base(typeof(ТЧСотруд), ((ICSSoft.STORMNET.DataObject)(fСотруд)))
        {
        }
        
        public IIS.Proba22.ТЧСотруд this[int index]
        {
            get
            {
                return ((IIS.Proba22.ТЧСотруд)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proba22.ТЧСотруд dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
