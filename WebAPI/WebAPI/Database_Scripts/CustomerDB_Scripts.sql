USE [CustomerDB]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 12/13/2019 11:37:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[CustomerCode] [nvarchar](20) NULL,
	[MobileNo] [nvarchar](20) NULL,
	[Address] [nvarchar](100) NULL,
	[UserId] [int] NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[User]    Script Date: 12/13/2019 11:37:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([CustomerId], [FullName], [CustomerCode], [MobileNo], [Address], [UserId]) VALUES (1, N'Sumon', N'001', N'01915521851', N'Gawair, Uttara, Dhaka', 1)
INSERT [dbo].[Customer] ([CustomerId], [FullName], [CustomerCode], [MobileNo], [Address], [UserId]) VALUES (2, N'Sujon', N'002', N'01915521852', N'Dhaka', 2)
INSERT [dbo].[Customer] ([CustomerId], [FullName], [CustomerCode], [MobileNo], [Address], [UserId]) VALUES (4, N'Milon', N'003', N'01915521853', N'Dhaka', 3)
INSERT [dbo].[Customer] ([CustomerId], [FullName], [CustomerCode], [MobileNo], [Address], [UserId]) VALUES (8, N'Rahman', N'004', N'01915521851', N'Gulshan, Dhaka', 1)
INSERT [dbo].[Customer] ([CustomerId], [FullName], [CustomerCode], [MobileNo], [Address], [UserId]) VALUES (23, N'Jackson', N'008', N'01915523857', N'Uttara, Dhaka', 2)
SET IDENTITY_INSERT [dbo].[Customer] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [Email], [Username], [Password]) VALUES (1, N'sumon08@gmail.com', N'sumon08', N'12345!')
INSERT [dbo].[User] ([UserId], [Email], [Username], [Password]) VALUES (2, N'jack01@gmail.com', N'jack01', N'12345@')
INSERT [dbo].[User] ([UserId], [Email], [Username], [Password]) VALUES (3, N'moses07@gmail.com', N'moses07', N'12345#')
INSERT [dbo].[User] ([UserId], [Email], [Username], [Password]) VALUES (4, N'lee09@gmail.com', N'lee09', N'12345$')
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[Customer]  WITH CHECK ADD  CONSTRAINT [FK_Customer_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Customer] CHECK CONSTRAINT [FK_Customer_User]
GO
